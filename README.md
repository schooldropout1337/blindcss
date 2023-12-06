# Blind CSS Exfiltration Demo

![](https://github.com/schooldropout1337/blindcss/blob/main/blindcss.jpg)

This repository contains a demonstration of Blind CSS Exfiltration, showcasing a Node.js css exfiltrator server, a test page, and proof-of-concept videos for reference.

# Article Source
The inspiration for this article is derived from the research conducted by PortSwigger, available at Blind CSS Exfiltration. The goal is to provide additional insights, explanations, and considerations based on this innovative web security threat.

https://portswigger.net/research/blind-css-exfiltration

![](https://github.com/schooldropout1337/blindcss/blob/main/blindcss.gif)

# Contents
index.js: Node.js server running on port 3000. It calls index.html to demonstrate Blind CSS Exfiltration.

index.html: HTML file containing a payload with a CSS import. This file is called by the Node.js server (port 3000).

css-exfiltrator-server.js: A css exfiltrator app running on port 5001.

two 2 PoC Videos on CSS Exfiltration technique for reference.

# Steps to Reproduce
1. node index.js
2. node css-exfiltrator-server.js
3. browse to http://127.0.0.1:3000
4. open devtool
5. go to network tab
