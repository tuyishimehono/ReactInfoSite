export default function MainContent() {
    return (
        <div className="text-white bg-[#282D35] py-14 px-8 pb-20 bg-right bg-no-repeat bg-[url('./src/assets/Group.png')]">
            <h1 className="text-4xl font-inter font-bold">Fun facts about React</h1>
            <ol className="list-disc flex flex-col pl-10 pt-4 font-inter text-md gap-3 marker:text-cyan-400 marker:text-2xl">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise appas including mobile apps</li>
            </ol>
        </div>
    )
}