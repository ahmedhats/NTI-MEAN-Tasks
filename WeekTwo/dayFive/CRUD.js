

const CRUD = function (req, res, arr, name) {
    if (req.method === "GET") {
        res.end(JSON.stringify(arr))
    }
    else if (req.method === "POST") {
        req.on("data", (chunk) => {
            let addedData = JSON.parse(chunk)
            let isExist = arr.find((d) => d.id === addedData.id)
            if (isExist) {
                res.end(`${name} exists`)
            }
            else {
                arr.push(addedData)
                console.log(addedData)
                res.end(`${name} added successfully`)
            }
        })
    }
    else if (req.method === "DELETE") {
        req.on("data", (chunk) => {
            let { id } = JSON.parse(chunk)
            const index = arr.findIndex((item) => item.id === id)
            if (index !== -1) {
                arr.splice(index, 1)
                res.end(`${name} deleted successfully`)
            } else {
                res.end(`${name} not found`)
            }
        })
    }
    else if (req.method === "PUT") {
        req.on("data", (chunk) => {
            let updatedData = JSON.parse(chunk)
            const index = arr.findIndex((item) => item.id === updatedData.id)
            if (index !== -1) {
                arr[index] = { ...arr[index], ...updatedData }
                console.log(updatedData)
                res.end(`${name} updated successfully`)
            } else {
                res.end(`${name} not found`)
            }
        })
    }
    else {
        res.end("Method not allowed")
    }
}

export default CRUD

