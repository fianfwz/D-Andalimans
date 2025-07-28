import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../responsive.css';

function CartPage() {
  const navigate = useNavigate();
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartItems, setCartItems] = useState(initialCart);
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alamat, setAlamat] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const baseTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = deliveryOption === 'delivery' ? 0 : 0;
  const total = baseTotal + deliveryFee;

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: item.price });
    }
    return acc;
  }, []);

  const handleCheckout = () => {
    if (!phoneNumber.trim()) {
      setModalMessage('Harap isi nomor telepon Anda.');
      setShowModal(true);
      return;
    }
    if (!phoneNumber.startsWith('08')) {
      setModalMessage('Nomor telepon harus dimulai dengan 08.');
      setShowModal(true);
      return;
    }
    if (phoneNumber.length < 12) {
      setModalMessage('Nomor telepon harus minimal 12 digit.');
      setShowModal(true);
      return;
    }

    if (deliveryOption === 'delivery' && !alamat.trim()) {
      setModalMessage('Harap isi alamat pengiriman untuk metode delivery.');
      setShowModal(true);
      return;
    }

    const adminWA = '6281210940483';
    const listPesanan = groupedItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} ${item.quantity > 1 ? `x${item.quantity}` : ''} - Rp${item.totalPrice.toLocaleString()}`
      )
      .join('%0A');

    const metode = deliveryOption === 'delivery' ? 'Delivery (belum termasuk biaya antar)' : 'Ambil di Tempat';
    const message = `Halo Admin,%0ASaya mau order:%0A${listPesanan}%0A%0AMetode: ${metode}%0ATotal: Rp${total.toLocaleString()}%0ANo. Telp: ${phoneNumber}%0A${deliveryOption === 'delivery' ? `Alamat: ${alamat}` : ''}%0A%0ASaya akan mengirimkan bukti transfer lewat WhatsApp.`;

    window.open(`https://wa.me/${adminWA}?text=${message}`, '_blank');
  };

  return (
    <div className="cart-wrapper" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <div className="cart-card" style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '30px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '20px' }}>🛒 Keranjang Belanja</h2>

        {cartItems.length === 0 ? (
          <p className="empty">Keranjang kamu kosong.</p>
        ) : (
          <>
            <ul className="cart-list" style={{ listStyle: 'none', padding: 0 }}>
              {groupedItems.map((item, index) => (
                <li key={index} className="cart-item" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}>
                  <div>
                    <strong>{item.name} {item.quantity > 1 && `x${item.quantity}`}</strong>
                    <p style={{ margin: 0 }}>Rp{item.totalPrice.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={() => {
                      const removeIndex = cartItems.findIndex(i => i.name === item.name);
                      handleRemoveItem(removeIndex);
                    }}
                    style={{
                      background: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        <hr style={{ margin: '20px 0' }} />

        {/* ✅ TOTAL LANGSUNG SETELAH PRODUK */}
            <div className="total" style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              marginBottom: '20px',
              marginTop: '10px',
            }}>
              <span>Total:</span>
              <span>Rp{total.toLocaleString()}</span>
            </div>

        <div style={{ marginBottom: '20px', backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '10px' }}>
          <strong>Transfer ke Rekening:</strong>
          <p style={{ marginTop: '4px', marginBottom: 0 }}>
            BCA: <strong>1234567890</strong><br />
            a.n. <strong>D'Andalimans</strong>
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '8px', color: '#e67e22' }}>
            *Biaya pengantaran belum termasuk jika memilih delivery.
          </p>
        </div>

        {/* Nomor Telepon */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="phone" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
            Nomor Telepon:
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
        </div>

        {/* Pilih Metode */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
            Pilih Metode Pengambilan:
          </label>
          <div>
            <label style={{ marginRight: '20px' }}>
              <input
                type="radio"
                value="pickup"
                checked={deliveryOption === 'pickup'}
                onChange={() => setDeliveryOption('pickup')}
              /> Ambil di Tempat
            </label>
            <label>
              <input
                type="radio"
                value="delivery"
                checked={deliveryOption === 'delivery'}
                onChange={() => setDeliveryOption('delivery')}
              /> Delivery (biaya disesuaikan dengan jarak antar)
            </label>
          </div>
        </div>

        {/* Alamat */}
        {deliveryOption === 'delivery' && (
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="alamat" style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
              Alamat Pengiriman:
            </label>
            <textarea
              id="alamat"
              placeholder="Masukkan alamat lengkap..."
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                minHeight: '80px'
              }}
            />
          </div>
        )}

        <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '24px' }}>
          Silakan kirim <strong>bukti transfer</strong> melalui WhatsApp setelah menekan tombol checkout.
        </p>

        <div className="cart-buttons" style={{ marginTop: '24px', display: 'flex', gap: '10px' }}>
          <button
            onClick={() => navigate('/menu')}
            style={{
              flex: 1,
              backgroundColor: '#ccc',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            ⬅ Kembali ke Menu
          </button>
          <button
            disabled={cartItems.length === 0}
            onClick={handleCheckout}
            style={{
              flex: 1,
              backgroundColor: '#1f2e12',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
            }}
          >
            Checkout via WhatsApp
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: '#fff',
            padding: '20px 30px',
            borderRadius: '12px',
            maxWidth: '90%',
            textAlign: 'center',
          }}>
            <p>{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: '12px',
                padding: '8px 16px',
                backgroundColor: '#e67e22',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
