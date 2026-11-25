import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CTA, PageHero, useDocTitle } from '../components/shared.jsx'
import { Icon } from '../components/ui.jsx'
import { kes } from '../lib/money.js'

const START = [
  { id: 1, name: 'Dairy meal 70kg', cat: 'Feeds', price: 2600, stock: 24 },
  { id: 2, name: 'Layers mash 70kg', cat: 'Feeds', price: 3100, stock: 18 },
  { id: 3, name: 'Dewormer 100ml', cat: 'Drugs', price: 450, stock: 40 },
  { id: 4, name: 'Tick spray 1L', cat: 'Drugs', price: 1200, stock: 9 },
  { id: 5, name: 'Maize seed 2kg', cat: 'Seeds', price: 650, stock: 60 },
  { id: 6, name: 'Kale seed 100g', cat: 'Seeds', price: 180, stock: 35 },
  { id: 7, name: 'CAN fertiliser 50kg', cat: 'Fertiliser', price: 3800, stock: 12 },
  { id: 8, name: 'Knapsack sprayer', cat: 'Tools', price: 4200, stock: 5 },
]
const CATS = ['All', 'Feeds', 'Drugs', 'Seeds', 'Fertiliser', 'Tools']

export default function Demo() {
  useDocTitle('Live demo · Agrovet POS')
  const [stock, setStock] = useState(START)
  const [cart, setCart] = useState({})
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [paid, setPaid] = useState(null)
  const [sales, setSales] = useState(0)
  const [view, setView] = useState('sell')

  const items = useMemo(() => stock.filter((s) => (cat === 'All' || s.cat === cat) && s.name.toLowerCase().includes(q.toLowerCase())), [stock, cat, q])
  const lines = stock.filter((s) => cart[s.id])
  const total = lines.reduce((a, s) => a + s.price * cart[s.id], 0)
  const add = (s) => cart[s.id] < s.stock || !cart[s.id] ? setCart((c) => ({ ...c, [s.id]: (c[s.id] || 0) + 1 })) : null
  const dec = (s) => setCart((c) => { const n = { ...c, [s.id]: c[s.id] - 1 }; if (n[s.id] <= 0) delete n[s.id]; return n })
  const pay = () => {
    setPaid({ lines: lines.map((s) => ({ name: s.name, qty: cart[s.id], amt: s.price * cart[s.id] })), total, no: 1000 + Math.floor(Math.random() * 900) })
    setStock((st) => st.map((s) => (cart[s.id] ? { ...s, stock: s.stock - cart[s.id] } : s)))
    setSales((x) => x + total)
    setCart({})
  }
  const low = stock.filter((s) => s.stock <= 10)

  return (
    <>
      <PageHero kicker="Live demo" bgText="DEMO" title="Try the Agrovet POS." lede="A working sample with made-up products. Add items, take a payment and watch stock update. This is the kind of system we build for shops.">
        <div className="phero-actions">
          <Link to="/work/agrovet-pos" className="btn btn-outline-light btn-lg">Read the case study</Link>
          <Link to="/estimator?type=pos" className="btn btn-light btn-lg">Price a POS for my shop <Icon name="arrow" size={18} /></Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="pos">
            <aside className="pos-side">
              <b className="mono">AGROVET POS</b>
              {[['sell', 'Sales'], ['stock', 'Stock'], ['report', 'Reports']].map(([k, l]) => (
                <button key={k} className={view === k ? 'on' : ''} onClick={() => setView(k)}>{l}</button>
              ))}
              <small>Demo data only</small>
            </aside>
            <div className="pos-main">
              <div className="pos-kpis">
                <div><small>Today’s sales</small><b>{kes(sales)}</b></div>
                <div><small>Items in stock</small><b>{stock.reduce((a, s) => a + s.stock, 0)}</b></div>
                <div className={low.length ? 'warn' : ''}><small>Low stock</small><b>{low.length}</b></div>
              </div>
              {view === 'sell' && (
                <div className="pos-sell">
                  <div>
                    <div className="pos-tools">
                      <input aria-label="Search products" placeholder="Search products…" value={q} onChange={(e) => setQ(e.target.value)} />
                      <div className="pos-cats">
                        {CATS.map((c) => <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
                      </div>
                    </div>
                    <div className="pos-items">
                      {items.map((s) => (
                        <button key={s.id} disabled={s.stock === 0} onClick={() => add(s)}>
                          <span>{s.name}</span>
                          <b>{kes(s.price)}</b>
                          <small className={s.stock <= 10 ? 'lowtxt' : ''}>{s.stock} in stock</small>
                        </button>
                      ))}
                      {!items.length && <p className="pos-empty">No products match.</p>}
                    </div>
                  </div>
                  <div className="pos-cart">
                    {paid ? (
                      <div className="receipt">
                        <b className="mono">Receipt #{paid.no}</b>
                        {paid.lines.map((l) => <div key={l.name}><span>{l.qty}× {l.name}</span><span>{kes(l.amt)}</span></div>)}
                        <div className="rt"><span>Total (cash / M-Pesa)</span><b>{kes(paid.total)}</b></div>
                        <button className="btn btn-dark" onClick={() => setPaid(null)}>New sale</button>
                      </div>
                    ) : (
                      <>
                        <b className="mono">Current sale</b>
                        {lines.length === 0 && <p className="pos-empty">Tap a product to add it.</p>}
                        {lines.map((s) => (
                          <div key={s.id} className="cl">
                            <span>{s.name}</span>
                            <span className="qty">
                              <button aria-label={`Remove one ${s.name}`} onClick={() => dec(s)}>−</button>
                              {cart[s.id]}
                              <button aria-label={`Add one ${s.name}`} onClick={() => add(s)}>+</button>
                            </span>
                            <b>{kes(s.price * cart[s.id])}</b>
                          </div>
                        ))}
                        <div className="ct"><span>Total</span><b>{kes(total)}</b></div>
                        <button className="btn btn-dark btn-lg" disabled={!total} onClick={pay}>Pay &amp; print receipt</button>
                      </>
                    )}
                  </div>
                </div>
              )}
              {view === 'stock' && (
                <table className="pos-table">
                  <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead>
                  <tbody>
                    {stock.map((s) => (
                      <tr key={s.id} className={s.stock <= 10 ? 'lowrow' : ''}>
                        <td>{s.name}</td><td>{s.cat}</td><td>{kes(s.price)}</td><td>{s.stock}{s.stock <= 10 && <em> · low</em>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {view === 'report' && (
                <div className="pos-report">
                  <p>Sales so far in this demo: <b>{kes(sales)}</b></p>
                  <p>Products needing restock: {low.length ? low.map((s) => s.name).join(', ') : 'none'}</p>
                  <p className="dim">In the real system you also get daily and monthly reports, staff accounts, supplier records and printable receipts.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <CTA title="Want one for" script="your shop?" />
    </>
  )
}
