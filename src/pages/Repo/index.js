import React from 'react'
import { Bibliography, ListOfRepositories } from '@/components/molecules'
import { TwoColumn } from '@/components/templates'

export default function Repo() {
  return <TwoColumn columnOne={<Bibliography />} columnTwo={<ListOfRepositories />} />
}
