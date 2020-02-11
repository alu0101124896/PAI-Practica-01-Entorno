# Práctica 1. El entorno de desarrollo de "Programación de Aplicaciones Interactivas.
### Factor de ponderación: 5
‌El objetivo de esta práctica es preparar y configurar el entorno de trabajo que se utilizará en el resto de prácticas de programación de la asignatura.

Deje constancia en ficheros locales de la máquina IaaS-ULL en la que trabaja de todos los cambios que realice. Estos ficheros ha de subirlos al repositorio que ha de entregar con la práctica. Así, p. ej. si edita Ud. el fichero `/.ssh/config` deje una copia de ese fichero el su directorio de trabajo src y nombre ese fichero de modo que se sepa de qué se trata (use por ejemplo el nombre `ssh-config.txt` para ese fichero que ha de entregar. Recuerde dejar en el directorio src de su repositorio **copia de todos** los ficheros que edite en el sistema.

Desarrolle en secuencia cada una de las tareas que se describen en los siguientes puntos, pero ocúpese no solo de “ejecutar comandos” sino de estudiar y entender el significado e implicaciones de cada uno de ellos.
 1. Inicie sesión en Linux en alguno de los PCs de la sala del Centro de Cálculo. En este texto denominaremos máquina remota a la máquina virtual (VM) del [IaaS-ULL][1] y máquina local al PC del centro de cálculo en el que está trabajando.
 2. Acceda a la [interfaz web][2] de la plataforma IaaS-ULL y autentifíquese en esa interfaz con sus credenciales (username + password) de la cuenta institucional. Vea el estado de la máquina y arránquela para comenzar a trabajar con ella.
Tendrá que cambiar el password (que inicialmente es “usuario”) de acceso a esa máquina remota la primera vez que entre en ella. El username será siempre “usuario”.
Compruebe el sistema operativo y versión del mismo en la máquina accediendo a la consola de la misma:
```
$ lsb_release -a
```
 3. Actualice el software (paquetes) de la máquina siguiendo las indicaciones de [esta página][3] (por ejemplo).
~~~~
$ sudo apt update
$ sudo apt upgrade
$ sudo apt autoremove
~~~~
No instale `grub`

 4. Edite los ficheros necesarios para [cambiar el nombre lógico de la máquina][4] que le ha sido asignada. Se propone utilizar como nombre algo como Ubuntu-18-PAI-X, aunque puede Ud. usar el nombre que más le guste.
~~~~
$ sudo vi /etc/hostname
$ sudo vi /etc/hosts
~~~~
	
Para que este cambio tenga efecto, ha de reiniciar la máquina:
```
$ sudo reboot
```
 5. Consulte la dirección IP de la máquina para establecer conexiones directas a la misma a través de ssh desde casa o desde las salas del Centro de Cálculo de la ESIT. Anote esa dirección IP puesto que la máquina conserva esa dirección IP de forma estable.
```
$ ifconfig -a
```
 6. Siga [estas instrucciones][5] para establecer la configuración de la máquina de modo que se pueda conectar a ella sin necesidad de escribir el password en cada conexión. Para poder conectarse por ssh con las máquinas virtuales de IaaS ull ha de autentificarse en la página [acceso.ull.es][6].  En caso de acceder desde fuera de la red de la ULL ha de hacerlo mediante una conexión vpn. Consulte [esta referencia][7] (en el Centro de Cálculo, por ahora no lo necesita) para conectarse a través de vpn.
 7. También resulta conveniente utilizar alguno de los métodos (ssh config o alias) que se presentan en [estas instrucciones][8] de modo que se simplifique la conexión con la máquina remota pudiendo escribir algo como:
```
$ ssh pai
```
para conectarse a la máquina remota.

 8. Cree una cuenta en [GitHub][9], si aún no la tiene. Configure el perfil de su cuenta de modo que incluya una imagen en la que se le reconozca y haga que la cuenta de e-mail asociada sea la dirección institucional.
 9. Consiga que se pueda subir código desde su máquina PAI hacia su cuenta GitHub sin necesidad de autentificación. Consulte para ello las instrucciones “[Adding a new SSH key to your GitHub account][10] y compruebe que es Ud. capaz de subir (commit) un fichero desde la máquina remota hacia su cuenta GitHub.
 10. Clone en su máquina IaaS el repositorio con el código que se ha entregado (git classroom) con el enunciado de la práctica:

    git clone git@github.com:ULL-ESIT-INF-PAI-2019-2020/2019-2020-PAI-P01-Entorno-XXX.git
Recuerde colocar en el directorio `src` de ese repositorio una copia de todos los ficheros que haya modificado.
 
 12. Instale en la máquina remota Node.js y NPM (el gestor de paquetes de Node.js) con el gestor de paquetes de Ubuntu tal como se explica en [este tutorial][11] y compruebe que Node ha quedado instalado:
~~~~
$ sudo apt install nodejs
$ sudo apt install npm
$ node -v
~~~~    

 11. Siga las instrucciones de [este tutorial][12] para actualizar NPM a su última versión y para cambiar la ubicación de los paquetes globales. Proponemos alojar los paquetes globales en el directorio `.node_modules_global`. Anote entre sus tareas pendientes estudiar en detalle este tutorial sobre el funcionamiento básico de NPM.
 12. Instale globalmente el paquete [readline-sync][13].
 13. Ejecute en modo consola (sin usar un navegador) el código de ejemplo `computePI.js` que hemos estudiado en clase.
 14. Codifique y compruebe el funcionamiento del programa que resuelve el ejercicio "[FizzBuzz][14].
 15. Dedique el tiempo restante a probar diferentes códigos (los que más interés le susciten) de [este tutorial][15].

## Referencias
[1]: https://www.ull.es/servicios/stic/2015/10/27/nuevo-servicio-iaas/                      "IaaS ULL"
[2]: https://iaas.ull.es/ovirt-engine/sso/login.html                                       "Ovirt. Open Virtualization Manager"
[3]: https://linuxconfig.org/how-to-update-ubuntu-packages-on-18-04-bionic-beaver-linux "How to Update Ubuntu packages"
[4]: https://askubuntu.com/questions/9540/how-do-i-change-the-computer-name "How do I change the computer name?"
[5]: http://www.linuxproblem.org/art_9.html "SSH login without password"
[6]: http://acceso.ull.es/  "acceso.ull.es"
[7]: https://www.ull.es/servicios/stic/2016/05/10/servicio-de-vpn-de-la-ull/  "Servicio de VPN de la ULL"
[8]: https://scotch.io/tutorials/how-to-create-an-ssh-shortcut "How to Create an SSH Shortcut"
[9]: https://github.com/ "GitHub"
[10]: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account 	"Adding a new SSH key to your GitHub account"
[11]: https://www.hostinger.com/tutorials/how-to-install-node-ubuntu 																				"How to Install Node.js on Ubuntu"
[12]: https://www.sitepoint.com/beginners-guide-node-package-manager/ 																			"NPM: The Node Package Manager"
[13]: https://www.npmjs.com/package/readline-sync 																													"readline-sync"
[14]: https://eloquentjavascript.net/02_program_structure.html 																							"FizzBuzz"
[15]: https://www.w3schools.com/js/default.asp 																															"JavaScript Tutorial"
