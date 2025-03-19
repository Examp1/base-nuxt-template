import fs from 'fs';
import path from 'path';

// Путь к package.json
const packageJsonPath = path.resolve('package.json');

// Проверяем, существует ли файл package.json
if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json not found!');
  process.exit(1);
}

// Читаем содержимое package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Проверяем, есть ли пакет si-check в зависимостях
const hasSiCheck = packageJson.dependencies && packageJson.dependencies['si-check'];

if (!hasSiCheck) {
  console.error('Error: si-check package is not found in dependencies!');
  process.exit(1); // Прерываем выполнение если пакет не найден
}

console.log('si-check package is installed. Proceeding with dev...');
