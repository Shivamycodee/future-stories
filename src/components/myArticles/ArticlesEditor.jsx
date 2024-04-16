import React, { useState,useEffect } from 'react'
import { Editor } from "@tinymce/tinymce-react";


function ArticlesEditor() {

  const [content, setContent] = useState(localStorage.getItem("contentA"));


  const getContent = () => {
    console.log(content);
  }


   useEffect(() => {
     const handleBeforeUnload = (event) => {
       event.preventDefault();
       event.returnValue = "";
     };
     window.addEventListener("beforeunload", handleBeforeUnload);
     // Remember to clean up after ourselves
     return () => {
       window.removeEventListener("beforeunload", handleBeforeUnload);
     };
   }, []);


  return (
    <div className="editor-holder">
      <Editor
        apiKey="sluqtg46ia4m4jckdg4m9sfegqb8m5bf0ormi86uzwn9mqki"
        init={{
          plugins:
            "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        // initialValue="Welcome to TinyMCE!"
        onEditorChange={(content, editor) => content ? localStorage.setItem("contentA", content):null}
      />

<button onClick={getContent}>Get Content</button>

    </div>
  );
}

export default ArticlesEditor