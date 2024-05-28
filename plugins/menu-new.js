let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
                  message: {
          interactiveMessage: {
            header: {
              title: ''
            },
            body: {
                text: 'const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *THE KODZI - Bot* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *أهلا, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *المالك:* Omar Ashraf
║➤ *رقم المطور:* wa.me/201050079089
║➤ *التاريخ:* ${date}
║➤ *وقت التشغيل:* ${uptime}
║➤ *عدد المستخدمين:* ${rtotal}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'القائمة',
                        highlight_label: 'تست',
                        rows: [
                          {
                            header: 'منشن',
                            title: 'منشن',
                            description: '',
                            id: '.منشن'
                          },
                                        {
                            header: 'الدعم',
                            title: 'الدعم',
                            description: '',
                            id: '.الدعم'
                          },
                          {
                            header: 'المطور',
                            title: 'المطور',
                            description: '',
                            id: '.مطور'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['الازرار']

export default handler
