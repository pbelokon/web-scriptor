function projectPage(data) { 
  console.log(
    `
      <div class="top">
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
      </div>

      <div class="paragraphs">
          <h3>${data.toolbox}</h3>
           ${
            data.paragraphs.map((paragraph) => {
              return `\n<p>${paragraph}</p>\n`
            })
           }
      </div>
    `
  )
}

export default projectPage; 