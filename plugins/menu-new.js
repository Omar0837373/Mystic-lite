let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.sendPresenceUpdate('recording', m.chat);
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'الازرار'
            },
            body: {
              text: 'تست'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'الأوامر',
                    sections: [
                      {
                        title: 'الأوامر',
                        highlight_label: 'مميز',
                        rows: [
                          {
                            header: 'جميع الأوامر',
                            title: '(#جـميع الأوامر🔰)',
                            description: '',
                            id: '.menu'
                          },
                                        {
                            header: 'وقت التشغيل',
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
handler.command = ['القائمة']

export default handler
