import React from 'react'
export const TitlePreview =()=>{
    return <h1 className=' text-center'>Hello, &lt;coders/&gt;!</h1>
}
const MarkdownPreview = () => {
    return (
        <div id="markdown-content" >
            <TitlePreview/>
        </div>
    );
}
export default MarkdownPreview
