ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  event.register(Commands.literal('skin')
    .then(Commands.literal('set')
      .then(Commands.argument('skin', Arguments.GREEDY_STRING.create(event))
        .executes(ctx => {
          const skin = Arguments.GREEDY_STRING.getResult(ctx, 'skin')
          const command = skin.startsWith('http://') || skin.startsWith('https://')
            ? `skin set web classic ${skin}`
            : `skin set mojang ${skin}`
          ctx.source.server.commands.performPrefixedCommand(ctx.source, command)
          return 1
        }))))
})
