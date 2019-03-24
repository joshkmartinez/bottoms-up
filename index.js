module.exports = (req, res) => {
    res.writeHead(302, {
      'Location': 'https://youtu.be/wdMA6sKFx_A'
    })
    res.end()
  }