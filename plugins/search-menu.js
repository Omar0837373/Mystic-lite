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
                    title: '',
                    sections: [
                      {
                        titl',
                        highlight_label: 'مميز',
                        rows: [
                          {
                            header: 'Google',
                            title: '(#بحث جوجل🔎)',
                            description: '',
                            id: '.google'
                          },
                                        {
                            header: '',
                            title: '(#وقت التشغيل🕓)',
                            description: '',
                            id: '.runtime'
                          },
                          {
                            header: 'البحث',
                            title: '',
                            description: '',
                            id: '.قائمة البحث'
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
handler.command = ['قائمة البحث']

export default handler
