// Pair code link > https://qr-hazel-alpha.vercel.app/md
// Get your session id and put it in the space created for it don't remove "
const { spawnSync } = require('child_process')
const { existsSync, writeFileSync } = require('fs')

const SESSION_ID = 'levanter_1014ddec44132f490d9e2a962908cda5e9' // Edit this line only, don't remove ' <- this symbol

if (!existsSync('levanter')) {
  console.log('Cloning the repository...')
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/lyfe00011/levanter.git', 'levanter'],
    {
      stdio: 'inherit',
    }
  )

  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`)
  }

  const configPath = 'levanter/config.env'
  try {
    console.log('Writing to config.env...')
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}\nSUDO=2349118759244\nTZ=Africa/Lagos\nSTICKER_PACKNAME=ɢʀᴇʏ【𓍯】\nYT_COOKIE=VISITOR_PRIVACY_METADATA=CgJORxIEGgAgPg%3D%3D;__Secure-3PSID=g.a000yQiWfCES3cTcHJ7xtG7CMVGm6vwPX14rpRQ-CI_K8kIUiMXRYN36A7zq3tWgxA2fv7jFWAACgYKAWoSARYSFQHGX2MinQBeOl3BrJZuNJ9jIBlG_xoVAUF8yKrd5alKNOdki_bZ0bVjipky0076;YSC=Di5T_N_aQJE;__Secure-1PSIDTS=sidts-CjIB5H03P4SOjVDkqVQHChqn1lTUEWughwLZIl2xu7e_S79QCp16pj1JGWSL7-kZVKWzkBAA;__Secure-3PAPISID=8n541BK4JFuI3g0A/AAjttVOAuXP5oOt-5;__Secure-3PSIDCC=AKEyXzVMJh33Ycei1PLbOmKz-BrGhbB_kTErLT3izhuuGAMN6k820DfILk2xSTL91Jzm6OA;__Secure-3PSIDTS=sidts-CjIB5H03P4SOjVDkqVQHChqn1lTUEWughwLZIl2xu7e_S79QCp16pj1JGWSL7-kZVKWzkBAA;LOGIN_INFO=AFmmF2swRQIgEnR99GU5IDS7ON1C5xhwjd-jtm9znNf-h8N32aOJ2gICIQDh0gJqtZQTfSpEnNpU7cmLjKqdBXnzegr5Ail2YcxoSg:QUQ3MjNmd18wdWFuMC12WGE1V3ZUX2NGZGx6SXZXdTVuOHhDbTNCOS1HanI1OVFKNkdIRXplS24xQmhhdzh5VzFRRXdZZEtSQjB1cDNVUmwzWmowbWFQLUw2bHU0ZHU1eVFWamRGa0lsdVVoNnFXaEZXbzNuQy1kRkh6TEg0S2NhOU1aZjBGcFVncWRadTFNeDQwbnFhS1VaNlY2ak9UMHBn;PREF=f6=40000000&tz=Africa.Lagos&f7=100;VISITOR_INFO1_LIVE=4RJ1unVWkf8`)
  } catch (err) {
    throw new Error(`Failed to write to config.env: ${err.message}`)
  }

  console.log('Installing dependencies...')
  const installResult = spawnSync('yarn', ['install', '--network-concurrency', '3'], {
    cwd: 'levanter',
    stdio: 'inherit',
  })

  if (installResult.error) {
    throw new Error(`Failed to install dependencies: ${installResult.error.message}`)
  }
}

spawnSync('yarn', ['start'], { cwd: 'levanter', stdio: 'inherit' })
