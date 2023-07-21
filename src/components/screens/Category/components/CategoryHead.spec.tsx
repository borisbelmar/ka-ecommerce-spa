import { render, screen } from '@testing-library/react'
import CategoryHead from './CategoryHead'

describe('CategoryHead', () => {
  it('should render the category name', () => {
    const mockName = 'mock category name'

    render(<CategoryHead name={mockName} />)

    expect(screen.getByText(mockName)).toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const mockName = 'mock category name'

    const { container } = render(<CategoryHead name={mockName} />)

    expect(container).toMatchSnapshot()
  })
})