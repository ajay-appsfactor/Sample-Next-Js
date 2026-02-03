"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModal";
import { Modal } from "../ui/modal/modal";
import { SquarePen } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const UserInfoCard = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <Label className="text-xs leading-normal text-gray-500 dark:text-gray-400">
                First Name
              </Label>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Ajay
              </p>
            </div>

            <div>
              <Label className="text-xs leading-normal text-gray-500 dark:text-gray-400">
                Last Name
              </Label>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Prajapati
              </p>
            </div>

            <div>
              <Label className="text-xs leading-normal text-gray-500 dark:text-gray-400">
                Email address
              </Label>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                ajay2kumarpp@gmail.com
              </p>
            </div>

            <div>
              <Label className="text-xs leading-normal text-gray-500 dark:text-gray-400">
                Phone
              </Label>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                +91 8191041371
              </p>
            </div>

            <div>
              <Label className="text-xs leading-normal text-gray-500 dark:text-gray-400">
                Bio
              </Label>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Team Manager
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={openModal}
          size="lg"
          type="button"
          variant="outline"
          className="rounded-full cursor-pointer"
        >
          <SquarePen className="h-4 w-4" />
          <span>Edit</span>
        </Button>
      </div>

      {/* <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label className="mb-1">Facebook</Label>
                    <Input
                      type="text"
                      defaultValue="https://www.facebook.com/PimjoHQ"
                    />
                  </div>

                  <div>
                    <Label className="mb-1">X.com</Label>
                    <Input type="text" defaultValue="https://x.com/PimjoHQ" />
                  </div>

                  <div>
                    <Label className="mb-1">Linkedin</Label>
                    <Input
                      type="text"
                      defaultValue="https://www.linkedin.com/company/pimjo"
                    />
                  </div>

                  <div>
                    <Label className="mb-1">Instagram</Label>
                    <Input
                      type="text"
                      defaultValue="https://instagram.com/PimjoHQ"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1">First Name</Label>
                    <Input type="text" defaultValue="Musharof" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Last Name</Label>
                    <Input type="text" defaultValue="Chowdhury" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email Address</Label>
                    <Input type="text" defaultValue="randomuser@pimjo.com" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1">Phone</Label>
                    <Input type="text" defaultValue="+09 363 398 46" />
                  </div>

                  <div className="col-span-2">
                    <Label className="mb-1">Bio</Label>
                    <Input type="text" defaultValue="Team Manager" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button
                size="lg"
                className="cursor-pointer"
                variant="outline"
                onClick={closeModal}
              >
                Close
              </Button>
              <Button size="lg" className="cursor-pointer" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
          
        </div>
      </Modal> */}

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
        <div className="p-6 lg:p-8">
          <h4 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white/90">
            Edit Personal Information
          </h4>

          <form className="flex flex-col gap-6">
            <ScrollArea className="h-105 pr-4">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div>
                  <Label>First Name</Label>
                  <Input defaultValue="Ajay" />
                </div>

                <div>
                  <Label>Last Name</Label>
                  <Input defaultValue="Prajapati" />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input defaultValue="ajay2kumarpp@gmail.com" />
                </div>

                <div>
                  <Label>Phone</Label>
                  <Input defaultValue="+91 8191041371" />
                </div>

                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
                <div className="lg:col-span-2">
                  <Label>Bio</Label>
                  <Input defaultValue="Team Manager" />
                </div>
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default UserInfoCard;
