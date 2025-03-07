import { useAuth } from '../hooks/useAuth';

export const Home = () => {
    const user = useAuth();

    return (
        <section>
            <p>This is Home Page</p>

            <div>
                <h3>User Information</h3>

                <p>User Name: {user.name}</p>
                <p>User Age: {user.age}</p>
                <p>User Gender: {user.gender}</p>
            </div>
        </section>
    );
};