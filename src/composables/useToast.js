import { ref } from 'vue'

/**
 * Toast Notification System
 * 
 * A comprehensive toast notification system that replaces native browser alerts.
 * 
 * Usage:
 * 
 * // Basic usage
 * const { success, error, warning, info } = useToast()
 * 
 * // Show different types of notifications
 * success('Operation completed successfully!', 'Success')
 * error('Something went wrong!', 'Error')
 * warning('Please check your input.', 'Warning')
 * info('Here is some information.', 'Info')
 * 
 * // Custom toast with options
 * const { addToast } = useToast()
 * addToast({
 *   type: 'success',
 *   title: 'Custom Title',
 *   message: 'Custom message',
 *   duration: 3000, // 3 seconds
 *   persistent: false // Auto-dismiss
 * })
 * 
 * // Persistent toast (won't auto-dismiss)
 * const { persistent } = useToast()
 * persistent('This toast will stay until manually closed', 'Important', 'warning')
 * 
 * // Clear all toasts
 * const { clearAll } = useToast()
 * clearAll()
 * 
 * Toast Types:
 * - success: Green gradient with checkmark icon
 * - error: Red gradient with X icon  
 * - warning: Orange gradient with warning triangle
 * - info: Blue gradient with info circle
 * 
 * Features:
 * - Auto-dismiss with progress bar
 * - Click to dismiss
 * - Smooth animations
 * - Mobile responsive
 * - Multiple toasts stack vertically
 * - Persistent toasts (no auto-dismiss)
 */

const toasts = ref([])
let nextId = 1

export function useToast() {
  const addToast = (options) => {
    const {
      type = 'info',
      title = '',
      message = '',
      duration = 5000,
      persistent = false
    } = options

    const toast = {
      id: nextId++,
      type,
      title,
      message,
      duration: persistent ? 0 : duration,
      timestamp: Date.now()
    }

    toasts.value.push(toast)

    // Auto-remove toast after duration (unless persistent)
    if (!persistent && duration > 0) {
      setTimeout(() => {
        removeToast(toast.id)
      }, duration)
    }

    return toast.id
  }

  const removeToast = (id) => {
    const index = toasts.value.findIndex(toast => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  const clearAll = () => {
    toasts.value = []
  }

  // Convenience methods
  const success = (message, title = 'Success') => {
    return addToast({ type: 'success', title, message })
  }

  const error = (message, title = 'Error') => {
    return addToast({ type: 'error', title, message })
  }

  const warning = (message, title = 'Warning') => {
    return addToast({ type: 'warning', title, message })
  }

  const info = (message, title = 'Info') => {
    return addToast({ type: 'info', title, message })
  }

  const persistent = (message, title = '', type = 'info') => {
    return addToast({ type, title, message, persistent: true })
  }

  return {
    toasts,
    addToast,
    removeToast,
    clearAll,
    success,
    error,
    warning,
    info,
    persistent
  }
}
