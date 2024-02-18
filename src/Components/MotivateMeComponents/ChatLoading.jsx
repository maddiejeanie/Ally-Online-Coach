export const ChatLoading = () => {
    return (
        <div className="bg-emerald-600 rounded-xl mx-4 px-2 py-2 mt-4 text-white self-start">
            <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-white rounded-full animate-bounce ease-in-out "></div>
                <div className="h-3 w-3 bg-white rounded-full animate-bounce ease-in-out delay-500"></div>
                <div className="h-3 w-3 bg-white rounded-full animate-bounce ease-in-out "></div>
                
            </div>
        </div>
    );
};
