¡Echa un vistazo también a los **interesantes cambios** introducidos en [3.0.0 Beta 4](https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/3.0.0-Beta-4)!

---

**3.0.0 Beta 5** restaura la **compatibilidad** con algunos **ratones** en macOS 13 Ventura y **arregla el desplazamiento** en muchas aplicaciones.
También incluye varias pequeñas correcciones y mejoras en la calidad de vida.

Aquí está **todo lo nuevo**:

### Ratón

- ¡Arreglado el desplazamiento en Terminal y otras aplicaciones! Ver el problema de GitHub [#413](https://github.com/noah-nuebling/mac-mouse-fix/issues/413).
- Solucionada la incompatibilidad con algunos ratones en macOS 13 Ventura al dejar de usar APIs poco fiables de Apple en favor de hacks de bajo nivel. Espero que esto no introduzca nuevos problemas - ¡avísame si ocurre! ¡Un agradecimiento especial a Maria y al usuario de GitHub [samiulhsnt](https://github.com/samiulhsnt) por ayudar a resolver esto! Ver el problema de GitHub [#424](https://github.com/noah-nuebling/mac-mouse-fix/issues/424) para más información.
- Ya no usará CPU al hacer clic en los botones 1 o 2 del ratón. Uso de CPU ligeramente reducido al hacer clic en otros botones.
    - Esta es una "Versión de depuración" por lo que el uso de CPU puede ser hasta 10 veces mayor al hacer clic en los botones en esta beta vs la versión final
- La simulación de desplazamiento del trackpad que se usa para las funciones "Desplazamiento Suave" y "Desplazar y Navegar" de Mac Mouse Fix es ahora aún más precisa. Esto podría llevar a un mejor comportamiento en algunas situaciones.

### Interfaz de Usuario

- Corrección automática de problemas con la concesión de Acceso de Accesibilidad después de actualizar desde una versión anterior de Mac Mouse Fix. Adopta los cambios descritos en las [Notas de la versión 2.2.2](https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/2.2.2).
- Añadido un botón "Cancelar" a la pantalla "Conceder Acceso de Accesibilidad"
- Solucionado un problema donde la configuración de Mac Mouse Fix no funcionaba correctamente después de instalar una nueva versión, porque la nueva versión se conectaba a la versión antigua de "Mac Mouse Fix Helper". Ahora, Mac Mouse Fix ya no se conectará al antiguo "Mac Mouse Fix Helper" y desactivará la versión antigua cuando sea apropiado.
- Se proporcionan instrucciones al usuario sobre cómo solucionar un problema donde Mac Mouse Fix no puede habilitarse correctamente debido a otra versión presente en el sistema. Este problema solo ocurre en macOS Ventura.
- Pulido del comportamiento y animaciones en la pantalla "Conceder Acceso de Accesibilidad"
- Mac Mouse Fix se traerá al primer plano cuando esté habilitado. Esto mejora las interacciones de la interfaz en algunas situaciones, como cuando habilitas Mac Mouse Fix después de que haya sido deshabilitado en Ajustes del Sistema > General > Elementos de inicio.
- Mejorados los textos de la interfaz en la pantalla "Conceder Acceso de Accesibilidad"
- Mejorados los textos de la interfaz que se muestran al intentar habilitar Mac Mouse Fix mientras está deshabilitado en Ajustes del Sistema
- Corregido un texto en alemán de la interfaz

### Bajo el capó

- El número de compilación de "Mac Mouse Fix" y el "Mac Mouse Fix Helper" integrado están ahora sincronizados. Esto se usa para evitar que "Mac Mouse Fix" se conecte accidentalmente a versiones antiguas de "Mac Mouse Fix Helper".
- Solucionado un problema donde algunos datos sobre tu licencia y período de prueba a veces se mostraban incorrectamente al iniciar la aplicación por primera vez, eliminando datos de caché de la configuración inicial
- Mucha limpieza de la estructura del proyecto y código fuente
- Mejorados los mensajes de depuración

---

### Cómo Puedes Ayudar

¡Puedes ayudar compartiendo tus **ideas**, **problemas** y **comentarios**!

El mejor lugar para compartir tus **ideas** y **problemas** es el [Asistente de Feedback](https://noah-nuebling.github.io/mac-mouse-fix-feedback-assistant/?type=bug-report).
El mejor lugar para dar **comentarios** rápidos no estructurados es la [Discusión de Feedback](https://github.com/noah-nuebling/mac-mouse-fix/discussions/366).

También puedes acceder a estos lugares desde la aplicación en la pestaña "**ⓘ Acerca de**".

**¡Gracias** por ayudar a mejorar Mac Mouse Fix! 💙💛❤️