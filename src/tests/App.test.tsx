import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import App from '../App'

afterEach(cleanup)
describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Vite + React')
  })

  it('increments count on button click', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeDefined()
  })
})
