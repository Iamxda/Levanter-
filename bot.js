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
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}\nSUDO=2349118759244\nTZ=Africa/Lagos\nSTICKER_PACKNAME=ɢʀᴇʏ【𓍯】\nYT_COOKIE=_ga=GA1.1.2057651143.1713634568;_ga_25SR9XJQ19=GS1.1.1726818567.1.1.1726818594.0.0.0;HSID=AK4z7DoWWo4-C9xaA;SSID=AjV3E8c5Yjr38AhFA;APISID=uc6RPuUAiTFP041f/A0oGnzbTSQ7ui2g_g;SAPISID=Rc5R_zvMMc61G2Xp/AhSi6NIRq5DmVYfLW;__Secure-1PAPISID=Rc5R_zvMMc61G2Xp/AhSi6NIRq5DmVYfLW;__Secure-3PAPISID=Rc5R_zvMMc61G2Xp/AhSi6NIRq5DmVYfLW;SEARCH_SAMESITE=CgQI8p0B;SID=g.a000yQiSfxzkcBOgDquY9IH-zGZB80Viwjg0S0wjl14HMoSJotTf_aL0aDLyyzoMkx2WnncUWQACgYKAW4SARASFQHGX2MizKTVmLVqwVX-ChikhsJywBoVAUF8yKqOVfX9W2HPQ6OIfaUrzlPv0076;__Secure-1PSID=g.a000yQiSfxzkcBOgDquY9IH-zGZB80Viwjg0S0wjl14HMoSJotTfpSUde1mvBLZuVjMivt1k2QACgYKAf0SARASFQHGX2MiZYTcvaDDW0niVW7LpL7ewRoVAUF8yKpSkf0l8-DseUmtj03Vnk2y0076;__Secure-3PSID=g.a000yQiSfxzkcBOgDquY9IH-zGZB80Viwjg0S0wjl14HMoSJotTfBxDNZVyGWufzRhZPiQo_cAACgYKAS4SARASFQHGX2MipwKYaTvFlSpbDHAiDmwc8BoVAUF8yKqSsU2Tw3u162vu2k_x2Qmp0076;OSID=g.a000yQiSf_OLWid8xfGLxPJlRBUqWqxa0H59_QyYEumDO_M9oxKwDbZ0rjjULs2Cb8ylo_px1AACgYKAecSARASFQHGX2MidUxqfo071JsqJ0x31FMTWxoVAUF8yKoB2c3WBShyD7yMt2eBiH7o0076;__Secure-OSID=g.a000yQiSf_OLWid8xfGLxPJlRBUqWqxa0H59_QyYEumDO_M9oxKwDo8YhHOyVv6d-dJRiyi-AwACgYKAQcSARASFQHGX2MiOphcVCcTv88ejuzFJaVOvhoVAUF8yKqYfuDVdHKupm64Yx0knhDs0076;OTZ=8137349_52_52__52_;AEC=AVh_V2iZptqpoUM_ggeUuLWei1sf1IIwOoYC3fZ_yJRqTbWCOGE3kCHQSd4;NID=525=LRevFTywPf9ryzUECAVccANlVr-qs8Yp18yJ7kCTMsEyiGCcrtqPaAT8SP7Fj0qi3OgRsw_Kxp4cxiiApuRXIZ1SK9J54GZS7YE6LN3N1VyOgykqfNZpY42GnKwQgUO3UL822gfHDpH7BFg_viegLQrjTSvWGSFtVNrckqspQ3VnfFyZI1iVhT8Oi_zOl5qUOeE9STTOWO3t4c1eqluyRxJS6ick7oIDs-x41lFi8clAr2z5a3MRco3pUCmsekOvIpo6hORc8t4YKOoMN21SN9HQnCiPxM30uSvIugFXWS0dppevJnO8442au_G1sDGy1Wuueh2tDxodGGZ0a3OGRfgchPEFq-A_qiESaJc-FFcbiR2QnD_PqNOKNguqVQ1YAt-W1aCYWe0O20fhGSpU6LKY_G86beWfKIWwKH9y3JG_C4Mft0jGM17BFq8-8UqRG8Oi8NOVOqHShTXF_dlqzrlR9t39tkb2oDnmRP6PnUQSNB08xLxIEyWcjH1aeb48xejM5-g7z2NXvjo3hEVJA_bjM-G9SfobFZjIx8T4rPQEitFISnyH6R6yT8QZsqlrSF_2S8Y7NJG9Hlro_LR749NNAowxpnbAocZrpjUTq1z2ip4s7r0_zM4a_0wnFQh46Tc0TOu3i3Zpc2Nf_9W2fSo_VbqhJGWC-JC9NpQpNdUBnsz7dtFLhNMf7YARsUiJ16rzLP8bKuGIW2h6tGPeGRsEGTTAbpfrhi7z_JSl0VmvbMPmW5UhlgRnH6um1GLYYgtBJyocYqcGx7VqdphtCxXa6nf_fMWw7gCpdey6lWfwXesJa_h8svoGkVR0FbtIQHDK2apgkqaC1yjR_cnab7qfgCKWSlmRSDwKyxdl1ilYMfPCy8rPaXE5jYGy4sNZ;_ga_KHZNC1Q6K0=GS2.1.s1750593100$o5$g0$t1750593100$j60$l0$h0;_ga_T1753RVHPT=GS2.1.s1750593101$o2$g0$t1750593101$j60$l0$h0;__Secure-1PSIDTS=sidts-CjEB5H03P_0GrVkkpTCW-BIWG0AVyEh62mpAxdl3-JAyujPLYzWDe8MwiPQZxZzrOQTqEAA;__Secure-3PSIDTS=sidts-CjEB5H03P_0GrVkkpTCW-BIWG0AVyEh62mpAxdl3-JAyujPLYzWDe8MwiPQZxZzrOQTqEAA;SIDCC=AKEyXzW0xLVB0OijGNZi1YZL9LisMbNJXl7n7Flu-0kCGq8uUDhSqhqTJIjhh2wZGohOlKp0Z7ET;__Secure-1PSIDCC=AKEyXzVIs9Nhng-xj6DoWQKJjyYgWJOpJuDK4RWzdu_q-ImVX-2ZfhCrXSuREFCd5oay8kvyOYdt;__Secure-3PSIDCC=AKEyXzUIfA53baO76oRUGn19AroaBrHh6-X9JygBLUK6k9S85D0vJzz5bcRw0uB0DsNKUwXbzwtL`)
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
