import { useState } from "react";
import { X, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { sendCartWhatsAppMessage } from "../utils/whatsapp";
import "./CartSidebar.css";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const items = state.items.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));
    sendCartWhatsAppMessage(items, state.total);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cart-sidebar-overlay" onClick={onClose} />

      {/* Sidebar */}
      <div className="cart-sidebar">
        <div className="cart-sidebar__container">
          {/* Header */}
          <div className="cart-sidebar__header">
            <h2 className="cart-sidebar__title">
              <ShoppingBag className="cart-sidebar__title-icon" />
              Carrito ({state.itemCount})
            </h2>
            <button onClick={onClose} className="cart-sidebar__close-button">
              <X className="cart-sidebar__close-icon" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="cart-sidebar__content">
            {state.items.length === 0 ? (
              <div className="cart-sidebar__empty">
                <ShoppingBag className="cart-sidebar__empty-icon" />
                <p className="cart-sidebar__empty-title">
                  Tu carrito está vacío
                </p>
                <p className="cart-sidebar__empty-subtitle">
                  Agrega productos para comenzar
                </p>
              </div>
            ) : (
              <div className="cart-sidebar__items">
                {state.items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="cart-sidebar__item"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-sidebar__item-image"
                    />
                    <div className="cart-sidebar__item-details">
                      <h3 className="cart-sidebar__item-name">{item.name}</h3>
                      {item.size && (
                        <p className="cart-sidebar__item-size">
                          Talla: {item.size}
                        </p>
                      )}
                      <p className="cart-sidebar__item-price">${item.price}</p>
                    </div>
                    <div className="cart-sidebar__item-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1, item.size)
                        }
                        className="cart-sidebar__quantity-button"
                      >
                        <Minus className="cart-sidebar__quantity-icon" />
                      </button>
                      <span className="cart-sidebar__quantity">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1, item.size)
                        }
                        className="cart-sidebar__quantity-button"
                      >
                        <Plus className="cart-sidebar__quantity-icon" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="cart-sidebar__remove-button"
                    >
                      <X className="cart-sidebar__remove-icon" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${state.total.toFixed(2)}</span>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ordenar por WhatsApp
                </button>

                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Proceder al Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
