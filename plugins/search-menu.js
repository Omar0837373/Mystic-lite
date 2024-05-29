let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.sendPresenceUpdate('recording', m.chat);
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'قائمة البحث'
            },
            body: {
              text: ''
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'الأوامر',
                    sections: [
                      {
                        title: 'Search',
                        highlight_label: 'مميز',
                        rows: [
                          {
                            header: 'Google',
                            title: '(#بحث جوجل🔎)',
                            description: '',
                            id: '.google'
                          },
                                        {
                            header: 'GitHub',
                            title: '(#بحث جوجل🔎)',
                            description: '',
                            id: '.github'
                          },
                          {
                            header: 'رجوع',
                            title: '(#القائمة الرئيسية🔻)',
                            description: '',
                            id: '.القائمة'
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
handler.command = ['search']

export default handler
