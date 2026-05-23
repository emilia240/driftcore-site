import { reactive, ref, watch } from 'vue'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useLoginForm() {
  const form   = reactive({ email: '', password: '' })
  const errors = reactive({ email: '', password: '' })

  // Clear field errors as the user types
  watch(() => form.email,    () => { if (errors.email)    errors.email    = '' })
  watch(() => form.password, () => { if (errors.password) errors.password = '' })

  // 'idle' → 'loading' → 'done'
  const loginState = ref('idle')

  function validateLogin() {
    errors.email = errors.password = ''
    let ok = true

    if (!form.email) {
      errors.email = 'Email is required.'; ok = false
    } else if (!EMAIL_RE.test(form.email)) {
      errors.email = 'Please enter a valid email address.'; ok = false
    }

    if (!form.password) {
      errors.password = 'Password is required.'; ok = false
    }

    return ok
  }

  function handleLogin() {
    if (!validateLogin()) return
    loginState.value = 'loading'
    // TODO: replace timeout with real auth call; set loginState = 'done' on success/failure
    setTimeout(() => { loginState.value = 'done' }, 2000)
  }

  return { form, errors, loginState, handleLogin }
}
