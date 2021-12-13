import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Renders the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /genesis boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
