import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function TabComponent() {
    return (
        <section className="text-black body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4">Build your self-serve model</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your cloud infrastructure platform that respects your standards                    </p>
                </div>
                <div className="relative">
                    <Tabs defaultValue="div1" className="flex py-12 mx-auto gap-4">
                        <TabsList className="flex items-start flex-col w-1/2 gap-4">
                            <TabsTrigger value="div1" className="max-w-lg flex-wrap border flex items-start flex-col overflow-hidden p-4 hover:bg-gray-100 bg-opacity-12 rounded-lg text-left">
                                <h2 className="text-lg font-semibold mb-2">Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto explicabo facere.</p>
                            </TabsTrigger>
                            <TabsTrigger value="div2" className="max-w-lg flex-wrap border flex items-start flex-col overflow-hidden p-4 hover:bg-gray-100 bg-opacity-12 rounded-lg text-left">
                                <h2 className="text-lg font-semibold mb-2">Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto explicabo facere.</p>
                            </TabsTrigger>
                            <TabsTrigger value="div3" className="max-w-lg flex-wrap border flex items-start flex-col overflow-hidden p-4 hover:bg-gray-100 bg-opacity-12 rounded-lg text-left">
                                <h2 className="text-lg font-semibold mb-2">Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto explicabo facere.</p>
                            </TabsTrigger>
                        </TabsList>
                        <div className="w-1/2">
                            <TabsContent value="div1">
                                <Card className="w-full">
                                    <CardHeader>
                                        <CardTitle>Account</CardTitle>
                                        <CardDescription>
                                            Make changes to your account here. Click save when you're done.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" defaultValue="Pedro Duarte" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Username</Label>
                                            <Input id="username" defaultValue="@peduarte" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save changes</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="div2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Password</CardTitle>
                                        <CardDescription>
                                            Change your password here. After saving, you'll be logged out.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="current">Current password</Label>
                                            <Input id="current" type="password" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="new">New password</Label>
                                            <Input id="new" type="password" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save password</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="div3">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Password</CardTitle>
                                        <CardDescription>
                                            Change your password here. After saving, you'll be logged out.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="current">Current password</Label>
                                            <Input id="current" type="password" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="new">New password</Label>
                                            <Input id="new" type="password" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save password</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </div>
                    </Tabs>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-background"></div>
                </div>
                {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <Image width={400} height={200} className='rounded-lg overflow-hidden' src="https://dummyimage.com/400x200/000/fff" alt="brand-1" />
                </div> */}
            </div>
        </section>
    )
}
