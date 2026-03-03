const fs = require('fs');
const data = JSON.parse(fs.readFileSync('eslint_report.json', 'utf8'));
data.filter(f => f.errorCount > 0 || f.warningCount > 0).forEach(f => {
    console.log('\nFIlE: ' + f.filePath);
    f.messages.forEach(m => {
        console.log(`  ${m.line}:${m.column}  ${m.severity === 2 ? 'error' : 'warning'}  ${m.message}  ${m.ruleId}`);
    });
});
