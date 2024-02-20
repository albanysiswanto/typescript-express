## Learning Flow

### Installasi
1. ``yarn init -y`` untuk menginisialisasikan projek kita dengan yarn.
2. ``yarn add -D typescript ts-node`` untuk menginstall typescript.
3. ``yarn add -D eslint`` untuk mengecek kualitas code.
4. ``yarn add -D prettier`` sebagai code formater.
5. ``npx eslint --init`` untuk menginisialisasikan eslint kedalam projek.
6. ``yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard eslint-config-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard`` plugin eslint tambahan.
7. ``npx tsc --init`` Untuk menginisialisasikan projek typescript.

### Initial Settings
1. Pada `tsconfig.json` ubah/aktifkan settingan berikut: 
```json
    "moduleResolution": "node", 
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*"]
    }, 
    "typeRoots": [
      "./src/types",
      "./node_modules/@types"
    ],
    "resolveJsonModule": true,
    "sourceMap": true,
    "outDir": "./build",
    "strict": true,
    "noImplicitAny": true,
    "include": [
    "src/**/*"
    ],
    "exclude": [
    "node_modules/*",
    ]
```
2. Lalu buka file `eslintrc.json` lalu udah dengan kode berikut:
```json
{
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["**/build/**", "**/node_modules/**", "**/public/*"],
    "rules": {}
}
```
3. install nodemon `yarn add -D nodemon`.
4. lalu membuat file `nodemon.json`:
```json
{
  "ext": "ts",
  "watch": [
    "src/**/*.ts"
  ],
  "exec": "npx ts-node ./src/index.ts"
}
```
5. Konfigurasi Prettier. Buat file `.prettierrc`:
```json
{
  "arrowParens": "always",
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": false
}
```
6. Lalu buat file `.prettierignore` untuk pengecualian:
```json
eslintrc.json
prettierrc.json
package.json
tsconfig.json
CHANGELOG.md
readme.md
nodemon.json
yarn.lock
dist
build
public
node_modules
vercel.json
```
7. lalu buat file pengecualian git dengan nama file `.gitignore`:
```json
# dependencies
/node_module

# testing
/coverage

# production
/dist
/build

# misc
.DS_Store
.package-lock.json

# IDE
.vscode

# env
.env
```
#### Install Dependencies
1. `yarn add express dotenv`.
2. Buat file baru yaitu `.env`.
3. Modifikasi file `package.json` dengan kode berikut:
```json
"scripts": {
    "start": "npx tsc -w",
    "dev": "npx nodemon",
    "lint": "npx eslint ./src --ext .ts",
    "lint:fix": "npx eslint ./src --ext .ts --fix",
    "build": "tsc && tsc && copy .env .\\build\\.env",
    "prod": "node ./build/index.js"
  }
```
### Last Step
1. Buat folder `src` untuk tempat kita coding.
2. Buat file `index.ts` di dalam folder `src`, lalu lakukan pengetesan dengan cara `console.log("Hello World!")`.
3. Lalu jalankan kode dengan cara `yarn dev`.
4. Selanjutnya kita akan menginstal dotenv dan express `yarn add -D @types/dotenv @types/express` agar auto complete nya tampil.
5. Lalu kita bisa membuat default kode untuk pertama kali:
```typescript
import express, { type Request, type Response, type Application, type NextFunction } from 'express';
import "dotenv/config";

const app: Application = express();
const port: number = process.env.PORT != null ? parseInt(process.env.PORT) : 3000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})
```
6. Jika ingin melalukan build bisa gunakan `yarn build`.
7. Jika ingin menjalankan build bisa gunakan `yarn prod`.