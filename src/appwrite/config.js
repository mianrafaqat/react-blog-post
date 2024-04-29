import conf from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    Databases
    bucket

    constructor() {
        this.client
        .setEndpoint(conf.apprwriteUrl)
        .setProject(conf.apprwriteProjectId);
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.database.createDocument(conf.apprwriteDataBaseId, conf.apprwriteCollectionId, slug, {title, content, featuredImage, status, userId})            
        } catch (error) {
            console.log("Appwrite create post", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.database.updateDocument(conf.apprwriteDataBaseId, conf.apprwriteCollectionId, slug, {title, content, featuredImage, status})
        } catch (error) {
            console.log("Appwrite update post", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(conf.apprwriteDataBaseId, conf.apprwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log("Appwrite delete post", error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(conf.apprwriteDataBaseId, conf.apprwriteCollectionId, slug)
        } catch (error) {
            console.log("Appwrite get post", error)
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(conf.apprwriteDataBaseId, conf.apprwriteCollectionId, queries)
        } catch (error) {
            console.log("Appwrite get posts", error)
            return false
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.apprwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite upload file", error)
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.apprwriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite delete file", error)
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.apprwriteBucketId, fileId)
    }
}


const service = new Service()
export default service
