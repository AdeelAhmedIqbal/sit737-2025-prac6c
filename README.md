# SIT737 - Task 6.2C: Interacting with Kubernetes

**Submitted By:** Adeel Ahmed (224404186)  
---

## 📌 Overview

In this task, I updated the previously deployed Node.js application by modifying its content (changing the quotes and title), rebuilt the Docker image with a new version tag, pushed it to Docker Hub, and then updated the Kubernetes deployment accordingly.

---

## 🧱 Steps Performed

### 1. ✏️ Modify the Application

- Changed the quotes in the app.
- Updated the title of the page.

### 2. 📦 Build the Updated Docker Image

```bash
docker build -t adeel2k01/node-app:v2 .
```

### 3. 🚀 Push the Updated Image to DockerHub

```bash
docker push adeel2k01/node-app:v2
```

### 4. ⚙️ Update Kubernetes Deployment

Updated `deployment.yaml` to use the new image:

```yaml
image: adeel2k01/node-app:v2
```

Then applied the updated deployment:

```bash
kubectl apply -f deployment.yaml
```

---

## ✅ Verify the Update

- Ran `kubectl rollout status deployment node-app-deployment`
- Accessed the app at: `http://localhost:30080`
- Confirmed updated quotes and new title were visible in the browser.

---

## ⏭️ Use port-forward instead of nodePort (just for Task 6.2D)

Use the following command to port forward traffic:

```bash
kubectl port-forward service/node-app-service 8081:3000
```

Then access the app at:

```
http://localhost:8081
```

---


## 📝 Notes

- This task demonstrates updating a live Kubernetes deployment using versioned Docker images.
- Using versioning (e.g., `:v2`) helps manage changes cleanly and reliably.

