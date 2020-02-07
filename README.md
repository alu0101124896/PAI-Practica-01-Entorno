# PAI Lab assignment (lab, class presentation with slides) structure
This directory is organised as follows:

      .
      ├── bib          # Assignment bibliography
      ├── report       # LaTeX template for the report
      ├── slides       # LaTeX Beamer template for the slides
      ├── tests        # Source code for tests
      ├── src          # Source code

## Práctica 1. El entorno de desarrollo de "Programación de Aplicaciones Interactivas.
‌El objetivo de esta práctica es preparar y configurar el entorno de trabajo que se utilizará en el resto de prácticas de programación de la asignatura.

Desarrolle secuencialmente cada una de las tareas que se describen en los siguientes puntos, pero ocúpese no solo de “ejecutar comandos” sino de estudiar y entender el significado e implicaciones de cada uno de ellos.
 1. Inicie sesión en Linux en alguno de los PCs de la sala del Centro de Cálculo. En este texto denominaremos máquina remota a la máquina virtual (VM) del [IaaS-ULL](https://www.ull.es/servicios/stic/2015/10/27/nuevo-servicio-iaas/) y máquina local al PC del centro de cálculo en el que está trabajando.
 2. Acceda a la [interfaz web](https://iaas.ull.es/ovirt-engine/) [1] de la plataforma IaaS-ULL y autentifíquese en esa interfaz con sus credenciales (username + password) de la cuenta institucional. Vea el estado de la máquina y arránquela para comenzar a trabajar con ella.
Tendrá que cambiar el password (que inicialmente es “usuario”) de acceso a esa máquina remota la primera vez que entre en ella. El username será siempre “usuario”.
Compruebe el sistema operativo y versión del mismo en la máquina accediendo a la consola de la misma:
```
$ lsb_release -a
```
 3. Actualice el software (paquetes) de la máquina siguiendo las indicaciones de [esta página](https://linuxconfig.org/how-to-update-ubuntu-packages-on-18-04-bionic-beaver-linux) [2] (por ejemplo).
~~~~
$ sudo apt update
$ sudo apt upgrade
$ sudo apt autoremove
~~~~
No instale `grub`

 4. Edite los ficheros necesarios para [cambiar el nombre lógico de la máquina](https://askubuntu.com/questions/9540/how-do-i-change-the-computer-name) [3] que le ha sido asignada. Se propone utilizar como nombre algo como Ubuntu-18-PAI-X, aunque puede Ud. usar el nombre que más le guste.
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
 6. Siga [estas instrucciones](http://www.linuxproblem.org/art_9.html) [4] para establecer la configuración de la máquina de modo que se pueda conectar a ella sin necesidad de escribir el password en cada conexión.
 7. También resulta conveniente utilizar alguno de los métodos (ssh config o alias) que se presentan en [estas instrucciones](https://scotch.io/tutorials/how-to-create-an-ssh-shortcut) [5] de modo que se simplifique la conexión con la máquina remota pudiendo escribir algo como:
```
$ ssh pai
```
para conectarse a la máquina remota.

 8. Cree una cuenta en [GitHub](https://github.com/) [6], si aún no la tiene. Configure el perfil de su cuenta de modo que incluya una imagen en la que se le reconozca y haga que la cuenta de e-mail asociada sea la dirección institucional.
 9. Consiga que se pueda subir código desde su máquina PAI hacia su cuenta GitHub sin necesidad de autentificación. Consulte para ello las instrucciones “[Adding a new SSH key to your GitHub account](https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account)” [7] y compruebe que es Ud. capaz de subir (commit) un fichero desde la máquina remota hacia su cuenta GitHub.
 10. Instale en la máquina remota Node.js y NPM (el gestor de paquetes de Node.js) con el gestor de paquetes de Ubuntu tal como se explica en [este tutorial](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu) [8] y compruebe que Node ha quedado instalado:
~~~~
$ sudo apt install nodejs
$ sudo apt install npm
$ node -v
~~~~    

 11. Siga las instrucciones de [este tutorial](https://www.sitepoint.com/beginners-guide-node-package-manager/) [] para actualizar NPM a su última versión y para cambiar la ubicación de los paquetes globales.

Referencias
[1] [https://iaas.ull.es/ovirt-engine/sso/login.html](https://iaas.ull.es/ovirt-engine/sso/login.html)
[2] [https://linuxconfig.org/how-to-update-ubuntu-packages-on-18-04-bionic-beaver-linux](https://linuxconfig.org/how-to-update-ubuntu-packages-on-18-04-bionic-beaver-linux)
[3] [https://askubuntu.com/questions/9540/how-do-i-change-the-computer-name](https://askubuntu.com/questions/9540/how-do-i-change-the-computer-name)
[4] SSH login without password [http://www.linuxproblem.org/art_9.html](http://www.linuxproblem.org/art_9.html)
[5] How to Create an SSH Shortcut [https://scotch.io/tutorials/how-to-create-an-ssh-shortcut](https://scotch.io/tutorials/how-to-create-an-ssh-shortcut)
[6] [https://github.com/](https://github.com/)
[7] [https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account](https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account)
[8] How to Install Node.js on Ubuntu 18.04 [https://www.hostinger.com/tutorials/how-to-install-node-ubuntu](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu)
[] NPM: The Node Package Manager. [https://www.sitepoint.com/beginners-guide-node-package-manager/](https://www.sitepoint.com/beginners-guide-node-package-manager/)



<!--stackedit_data:
eyJoaXN0b3J5IjpbMTc0Njc4NDg0OCwtNTU2NTAwMjcxLDE5ND
MxNTk1MzJdfQ==
-->