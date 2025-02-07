## Project 
- The ingress addon is required for the loadbalancer to work.
- The metallb addon is required if you are working on bare metal environment, like on premise servers.
- The minikube tunnel is required for metallb to work.
- Enable the LoadBalancer Add-on (if not already enabled):
	```sh
	minikube addons enable ingress
	```
- metallb is required for metal env
	```sh
	minikube addons enable metallb
	```

- Start tunnel is required for metallb or ingress to work.
	```sh 
	minikube tunnel
	```

## Docker 

### Build Image
##### Syntax:
```sh
docker build -t <image_name>:<version> <location_to_docker_fie>
```
##### Example: 
```sh
docker build -t vineshgoyal/micro_serv_demo:0.0.1 .  
```

### Run Container in detach mode (-d)
##### Syntax:
```sh
docker run -it -d <image_name>:<version>
```
##### Example:
Without version will pick latest build
```sh
docker run -it -d vineshgoyal/micro_serv_demo    
```
With version will pick specific verion of the image
```sh
docker run -it -d vineshgoyal/micro_serv_demo:0.0.1
```

## kuberbnetes

### Installation
- Using MiniKube
	```sh
	brew install minikube
	```

- Start Kubernetes using docker driver
	```sh
	minikube start --driver=docker
	```

##### Basic Commands:

- Get list of all created nodes
	```sh
	kubectl get nodes
	```

- Get list of all created services
  ```sh
	kubectl get services
	```

- Get list of all created pods
  ```sh
	kubectl get pods
	```

- Get list of all created deployments
  ```sh
	kubectl get deployments
	```

- Execute yaml configurations for all kind objects
	```sh
	kubectl apply -f <filename>.yaml
	```
- Get detail of specific object
	```sh
	kubectl describe service <name_of_object>
	```

	```sh
	kubectl describe deployment <name_of_object>
	```

	```sh
	kubectl describe pod <name_of_object>
	```

	```sh
	kubectl describe node <name_of_object>
	```

- Delete specific object
	```sh
	kubectl delete service <name_of_object>
	```

	```sh
	kubectl delete deployment <name_of_object>
	```

	```sh
	kubectl delete pod <name_of_object>
	```

	```sh
	kubectl delete node <name_of_object>
	```

	```sh
	kubectl logs -f <pod_id>
	```

	## Minikube

	- To get URL for nodePort (development purpose)
		```sh
		minikube service post-serv-node-port --url
		```
	- Get list of all addons
		```sh
		minikube addons list      
		```

	- Enable specific addon
		```sh
		minikube addons enable <addon_name>
		```
