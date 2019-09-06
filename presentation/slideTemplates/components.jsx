import styled from 'react-emotion'
import React from 'react'
import {
  BlockQuote as BaseBlockQuote,
  Heading as BaseHeading,
  Quote as BaseQuote,
  Text as BaseText,
  Cite as BaseCite,
  Image as BaseImage,
  List as BaseList,
  ListItem as BaseListItem,
  CodePane as BaseCodePane,
  Notes as BaseNotes
} from 'spectacle'
export { Appear } from 'spectacle'

// put component customizations here
export const Heading = styled(BaseHeading)`
  letter-spacing: 0.07em;
  font-weight: normal;
  font-size: 4rem;
`
export const BlockQuote = styled(BaseBlockQuote)`
  letter-spacing: 0.05em;
`
export const Quote = styled(BaseQuote)`
  letter-spacing: 0.05em;
`
export const Text = styled(BaseText)`
  letter-spacing: 0.05em;
  font-size: 2rem;
`
export const Cite = styled(BaseCite)`
  letter-spacing: 0.05em;
`
export const Image = styled(BaseImage)`
  letter-spacing: 0.05em;
`
export const List = styled(BaseList)`
  letter-spacing: 0.05em;
`
export const ListItem = styled(BaseListItem)`
  letter-spacing: 0.05em;
  font-size: 4rem;
`

export const Notes = ({ children }) => {
  return (
    <BaseNotes>
      <div style={{ fontFamily: 'Helvetica', fontSize: '1.5rem' }}>
        {children}
      </div>
    </BaseNotes>
  )
}

export const CodePane = styled(BaseCodePane)``
