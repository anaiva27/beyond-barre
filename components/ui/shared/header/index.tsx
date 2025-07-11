import { APP_NAME } from "@/lib/constants";
import { UserIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
    return ( <header className="w-full border-b">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href="/" className="flex-start">
                <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} height={48} width={48} priority={true}/>
                <span className="hidden font-bold text-2xl ml-3">{APP_NAME}</span>
                </Link>
            </div>
            <div className="space-x-2">
                <Button asChild variant='ghost'>
                    <Link href='/sign-in'>
                    <UserIcon />Sign In</Link>
                </Button>
            </div>
        </div>
    </header> );
}
 
export default Header;