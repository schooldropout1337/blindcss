# Blind CSS Exfiltration Demo
This repository contains a demonstration of Blind CSS Exfiltration, showcasing a Node.js server, a vulnerable app, and proof-of-concept videos for reference.

# Article Source
The inspiration for this article is derived from the research conducted by PortSwigger, available at Blind CSS Exfiltration. The goal is to provide additional insights, explanations, and considerations based on this innovative web security threat.

https://portswigger.net/research/blind-css-exfiltration

# Contents
index.js: Node.js server running on port 3000. It calls index.html to demonstrate Blind CSS Exfiltration.

index.html: HTML file containing a payload with a CSS import. This file is called by the Node.js server (port 3000).

css-exfiltrator-server.js: A vulnerable Node.js app running on port 5001, susceptible to Blind CSS Exfiltration. This demonstrates the potential impact of the attack.

two 2 PoC Videos on CSS Exfiltration technique for reference.
