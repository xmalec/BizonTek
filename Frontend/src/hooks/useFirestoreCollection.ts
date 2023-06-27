import { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { initializeFirebase } from "../utils/firebase";

const useFirestoreCollection = (collectionName: string) => {
	const [data, setData] = useState<object[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Initialize Firebase Firestore
		initializeFirebase();
		const db = getFirestore();

		// Create a reference to the collection
		const collectionRef = collection(db, collectionName);

		// Subscribe to real-time updates using onSnapshot
		const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
			const items: object[] = [];
			snapshot.forEach((doc) => {
				// Get the document data and add it to the array
				items.push({ id: doc.id, ...doc.data() });
			});

			// Update the state with the retrieved data
			setData(items);
			setLoading(false);
		});

		// Clean up the subscription when the component unmounts
		return () => unsubscribe();
	}, [collectionName]);

	return { data, loading };
};

export default useFirestoreCollection;
