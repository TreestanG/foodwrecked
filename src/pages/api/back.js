export default function handle(req, res) {
    if(req.method === 'POST') {
        const data = req.body
        
        fetch(data.apiLink, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${data.apiKey}`,
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(data => {
            res.status(200).json(data)
        })
    }
}