const config = {
    apprwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    apprwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    apprwriteDataBaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    apprwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    apprwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config