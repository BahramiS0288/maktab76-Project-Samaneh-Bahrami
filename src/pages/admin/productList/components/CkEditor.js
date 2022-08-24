import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'

export default function CkEditor(){
    const[text , setText]=useState('')

    const handleChange =(e,editor) =>{
        setText(editor.getData())
    }
    return(
        <>
        <CKEditor
        editor={ClassicEditor}
        onChange={(e,editor) =>{handleChange(e,editor)}}
        />
        </>
    )
} 