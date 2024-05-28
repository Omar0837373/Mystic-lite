let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
                  message: {
          interactiveMessage: {
            header: {
              title: ''
            },
            body: {
                text: ''
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'الأوامر',
                        highlight_label: 'مميز',
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
                          }
                        ]
                      }
                    ],
                      sections: [
                          {
                        title:  'الأوامر' ,
                        highlight_label:  'مميز' ,
                        rows: [
                          {
                            header: 'المطور',
                            title: 'المطور',
                            description: 'رقم المطور الرسمي',
                            id: '.المطور'
                          },
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
handler.command = ['الازرار|م']

export default handler
