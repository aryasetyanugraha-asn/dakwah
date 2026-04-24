const fs = require('fs');

let content = fs.readFileSync('src/pages/ScholarProfile.tsx', 'utf-8');
content = content.replace("import Sidebar from '../components/Sidebar';", "import Sidebar from '../components/Sidebar';\nimport { motion } from 'framer-motion';");

content = content.replace('<div className="min-h-screen bg-surface dark:bg-emerald-950 flex flex-col md:flex-row">', '<motion.div \n      initial={{ opacity: 0, y: 15 }}\n      animate={{ opacity: 1, y: 0 }}\n      exit={{ opacity: 0, y: -15 }}\n      transition={{ duration: 0.3 }}\n      className="min-h-screen bg-surface dark:bg-emerald-950 flex flex-col md:flex-row">');

const ending = `      </main>\n    </div>\n  );\n}`;
content = content.replace(ending, `      </main>\n    </motion.div>\n  );\n}`);

fs.writeFileSync('src/pages/ScholarProfile.tsx', content, 'utf-8');
console.log('Fixed ScholarProfile.tsx');
