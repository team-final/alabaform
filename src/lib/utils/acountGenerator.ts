export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

export const generateTestId = async (handleSubmit: any) => {
  for (let i = 0; i < 10; i++) {
    const presetRole = ['OWNER', 'APPLICANT']
    const randomIdx = parseInt(String(getRandomInt(9999))) // 난수 생성
    await handleSubmit({
      email: `example${randomIdx}@email.com`,
      password: '00000000',
      role: presetRole[randomIdx % 2],
    })
  }
}
