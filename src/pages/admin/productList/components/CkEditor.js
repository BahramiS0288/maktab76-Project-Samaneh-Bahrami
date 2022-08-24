import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState,useEffect } from 'react'
// import ReactHtmlParser from 'react-html-parser'

export default function CkEditor({describtion,handleChangeData}){
    const[text , setText]=useState()

    const handleChange =(e,editor) =>{
        setText( editor.getData())
        handleChangeData("describtion",text)
    }
    return(
        <>
        <CKEditor
        editor={ClassicEditor}
        onChange={(e,editor) =>{handleChange(e,editor)}}
        data={describtion}
        />
        </>
    )
} 