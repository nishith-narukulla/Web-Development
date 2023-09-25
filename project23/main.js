const url = 'sample-1.pdf'

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null

const scale = 1,
    canvas = document.getElementById('pdf-render'),
    ctx = canvas.getContext('2d')

// Render PDF
const renderPage = num => {
    pageIsRendering = true

    // Get page
    pdfDoc.getPage(num).then(page => {
        // Set scale
        const viewport = page.getViewport({ scale })
        canvas.height = viewport.height
        canvas.width = viewport.width

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false

            if (pageNumIsPending !== null) {
                renderPage(pageNumIsPending)
                pageNumIsPending = null
            }
        })

        // output the paageNum
        document.getElementById('page-num').textContent = num
    })
}

// Check for pages
const pageRenderQueue = num => {
    if (pageIsRendering) {
        pageNumIsPending = num
    } else {
        renderPage(num)
    }
}

// EVENTS
// Show Prev page
document.getElementById('prev-btn').addEventListener('click', () => {
    if (pageNum <= 1) {
        return
    }
    pageNum--
    pageRenderQueue(pageNum)
})

// Show Next page
document.getElementById('next-btn').addEventListener('click', () => {
    if (pageNum > pdfDoc.numPages) {
        return
    }
    pageNum++
    pageRenderQueue(pageNum)
})

// Get Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_

    document.getElementById('page-count').textContent = pdfDoc.numPages

    renderPage(pageNum)
})
    .catch(err => {
        const div = document.createElement('div')
        div.className = 'error'
        div.appendChild(document.createTextNode(err.message))
        document.body.insertBefore(div, canvas)

        document.querySelector('.top-nav').style.display = 'none'
    })