const fs = require('fs');

let content = fs.readFileSync('src/pages/AdminDashboard.tsx', 'utf-8');
if (!content.includes('import { motion } from "framer-motion";')) {
    content = 'import { motion } from "framer-motion";\n' + content;
}
fs.writeFileSync('src/pages/AdminDashboard.tsx', content, 'utf-8');
console.log('Fixed AdminDashboard.tsx');
