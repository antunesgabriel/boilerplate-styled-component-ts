import { render } from '@testing-library/react'
import Main from './main_component'

describe('<Main />', () => {
  it('should render main', () => {
    const screen = render(<Main />)

    expect(screen.getByRole('heading', { name: /ok baby/i }))
  })
})
