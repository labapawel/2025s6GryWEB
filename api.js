const { text } = require('express');

require('dotenv').config();

async function gemini(prompt){
    let resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents:[
                {parts:[{text:prompt}]}
            ]
          
        })
    });
    return (await resp.json()).candidates[0].content.parts[0].text;
}

let opd = gemini('Jak się masz?');
opd.then(e=>console.log(e));
