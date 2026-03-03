const fs = require('fs');
const data = JSON.parse(fs.readFileSync('eslint_report.json', 'utf8'));
let out = '';
data.filter(f => f.errorCount > 0 || f.warningCount > 0).forEach(f => {
    out += '\nFIlE: ' + f.filePath + '\n';
    f.messages.forEach(m => {
        out += `  ${m.line}:${m.column}  ${m.severity === 2 ? 'error' : 'warning'}  ${m.message}  ${m.ruleId}\n`;
    });
});
fs.writeFileSync('out_clean.txt', out, 'utf8');
