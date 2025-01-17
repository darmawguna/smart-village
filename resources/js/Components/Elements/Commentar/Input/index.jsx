import React from 'react'
import Input from './Input'
import Label from './Label'

const InputComment = () => {
  return (
    <div className='flex flex-col gap-3'>
        <div>
        <Label htmlfor="nama">Nama</Label>
        <Input
        type="text"
        name="nama"
        variant="w-full"
        placeholder="Masukan Nama Anda" />
        </div>

        <div>
        <Label htmlfor="komentar">Komentar</Label>
        <Input
        type="textarea"
        name="komentar"
        variant="w-full"
        placeholder="Masukan Komentar" />
        </div>
    </div>
  )
}

export default InputComment